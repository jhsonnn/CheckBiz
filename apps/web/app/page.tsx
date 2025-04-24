'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

interface BizResult {
  valid: boolean;
  name: string;
  status: string;
}

async function checkBiz(bizNumber: string): Promise<BizResult> {
  const response = await fetch('/api/check-biz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bizNumber }),
  });

  if (!response.ok) throw new Error('Server Error!');

  return response.json();
}

export default function Page() {
  const [bizNumber, setBizNumber] = useState('');

  const mutation = useMutation({
    mutationFn: checkBiz,
  });

  const handleCheck = () => {
    mutation.mutate(bizNumber);
  };
  return (
    <main>
      <Title>사업자 등록번호 조회</Title>
      <SubTitle>사업자 등록번호를 입력해주세요.</SubTitle>

      <Input
        type="text"
        placeholder="사업자번호 10자리를 입력해주세요."
        value={bizNumber}
        onChange={(e) => setBizNumber(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
      />

      <button
        onClick={handleCheck}
        disabled={mutation.isPending || bizNumber.length !== 10}
      >
        {mutation.isPending ? '조회 중...' : '조회'}
      </button>

      {mutation.isError && <p>조회 중 오류가 발생했습니다!</p>}

      {mutation.data && (
        <div>
          <p>입력하신 사업자 번호 {bizNumber}의 검색 결과</p>
          <p>
            유효성 :{' '}
            {mutation.data.valid
              ? '유효한 번호입니다.'
              : '유효하지 않은 번호입니다.'}{' '}
          </p>
          <p>상호명 : {mutation.data.name}</p>
          <p>상태 : {mutation.data.status}</p>
        </div>
      )}
    </main>
  );
}

export const Wrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: ##262626;
`;

export const SubTitle = styled.p`
  font-size: 15px;
  color: #666;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 12px 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  background: transparent;
`;
