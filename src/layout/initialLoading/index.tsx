import { useEffect, useState } from 'react'
import { userModel } from '../../entities/user/model'
import { Loading } from '../../shared/components/loading'
import { Logo } from '../../shared/components/logo'
import { InitialLoadingStyled } from './styles'

const TIMEOUTS = {
	slowInternetMessage: 10000,
	fullStop: 20000
}

export const InitialLoading = () => {
	const { data, loggining } = userModel.useUser()
	const [showSlowInternetMessage, setShowSlowInternetMessage] = useState(false)
	const [timeoutError, setTimeoutError] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			if (!data) {
				setShowSlowInternetMessage(true)
			}
		}, TIMEOUTS.slowInternetMessage)

		setTimeout(() => {
			if (!data) {
				setTimeoutError(true)
			}
		}, TIMEOUTS.fullStop)


	}, [data])



	return (
		<InitialLoadingStyled className={loggining ? 'loading' : 'loaded'}>
			<Logo short />
			{showSlowInternetMessage && <span>It seems like You have slow internet connection...</span>}
			{loggining && <Loading />}
		</InitialLoadingStyled>
	)
}
