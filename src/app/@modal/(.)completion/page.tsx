'use client';

import Modal from '@/components/common/Modal';
import { useEffect, useState } from 'react';
import useWeb3 from '@/hooks/contract/useWeb3';
import Web3 from 'web3'; // Web3를 가져와 사용

function CompletionModal() {
  const [web3, web3Account, contract] = useWeb3();
  const [account, setAccount] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [signature, setSignature] = useState<string | null>(null);

  // 계정 정보가 변경될 때 계정을 설정하고 로딩 상태를 업데이트
  useEffect(() => {
    if (web3Account && typeof web3Account === 'string') {
      setAccount(web3Account);
      setIsLoading(false);
    }
    console.log(contract, '스마트컨트랙트 연동');
  }, [web3Account]);

  useEffect(() => {
    const signMessage = async () => {
      if (web3 instanceof Web3 && account) {
        const message = '계약을 완료하기 위해 전자 서명을 해주세요. ';
        try {
          const eSignature = await web3.eth.personal.sign(message, account, '');
          setSignature(eSignature);
          console.log('서명 완료:', signature);
        } catch (error) {
          console.error('서명 실패:', error);
        }
      }
    };
    if (account) {
      signMessage();
    }
  }, [account, web3]);

  if (isLoading) {
    return <Modal>계약 완료를 위해 메타마스크 계정 연동 중...</Modal>;
  }

  return (
    <Modal>
      {account ? (
        <div>
          <div>{account} 계정이 연결되었습니다.</div>
          {signature ? (
            <div>서명: {signature}</div>
          ) : (
            <div>서명 요청 중...</div>
          )}
        </div>
      ) : (
        <div>계정 정보를 불러오지 못했습니다.</div>
      )}
    </Modal>
  );
}
export default CompletionModal;