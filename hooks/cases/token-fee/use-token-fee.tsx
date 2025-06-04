
import { ITokenUsageBase, TokenFeeStatus, TokenFeeType } from '@/lib/interfaces/api/TokenusageFeeAPIResponse'
import { tokenFeeApi } from '@/services/api/token-usage-fee'
import { useEffect, useState } from 'react'

interface UseTokenFeeParams {

  token_fee: "HEATMAP_GENERATION" | "KEYWORD_GENERATION" | "AUDIT_GENERATION"
}

function useTokenFee({ token_fee }: Readonly<UseTokenFeeParams>) {

  const [tokenFeeData, setTokenFeeData] = useState<ITokenUsageBase>({
    token_name: "",
    token_description: "",
    token_amount: 0,
    offer_in_percentage: 0,
    has_offer: false,
    offer_expiration_date: "",
    last_updated: "",
    token_fee_type: TokenFeeType.NOT_SET,
    token_fee_status: TokenFeeStatus.NOT_SET,
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const makeFetch = async () => {
      setLoading(true)
      const data = await tokenFeeApi.getTokenFee(token_fee)

      setTokenFeeData(data.data!)

      setLoading(false)
    }

    makeFetch()
  }, [token_fee])
  return {
    tokenFeeData,
    loading
  }
}

export default useTokenFee