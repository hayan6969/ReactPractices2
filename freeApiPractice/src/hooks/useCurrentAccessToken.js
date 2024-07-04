import { useSelector } from "react-redux"

const useCurrentAccessToken = () => {
    const token = useSelector((state) => {
        if (state.auth.status) {
            return state.auth.token
        }
    })
    return token
}
export default useCurrentAccessToken