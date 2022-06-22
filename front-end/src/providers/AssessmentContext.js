import { createContext, useContext, useState } from "react"
import toast from "react-hot-toast"
import { useHistory } from "react-router-dom"
import api from "../services/api"
import { useAuth } from "./AuthContext"

const AssessmentContext = createContext()

const useAssessmentContext = () => {
    const context = useContext(AssessmentContext)
    return context
}

const AssessmentProvider = ({ children }) => {

    const [assessmentList, setAssessmentList] = useState(
        JSON.parse(localStorage.getItem('@ergoframe:assessmentList')) || []
    )

    const history = useHistory()
    const { token, userid } = useAuth()

    const createAssessment = ({ title, description, url }) => {

        api.post('/assessment', { title, description, url, user: userid }, { headers: { 'x-access-token': token } })
            .then(res => {

                history.push(`/nova-groupquestion/${res.data._id}`)
                toast.success('Nova avaliação cadastrada!')
                userAssessmenteList()
            }).catch(err => {

                toast.error('Algo não ocorreu como esperado.\nTente novamente!')
            })
    }

    const userAssessmenteList = () => {

        api.get('/assessment', { headers: { 'x-access-token': token } })
            .then(res => {

                setAssessmentList(res.data)
                localStorage.setItem('@ergoframe:assessmentList', JSON.stringify(res.data))
                console.log(res.data)
                if ((res.data).length > 0)
                    toast.success('Suas avaliações foram carregadas')
                else
                    toast.success('Ainda não temos avaliações.\nComece uma agora mesmo!')

            }).catch(err => {
                toast.error('Algo não ocorreu como esperado.\nTente fazer login novamente!')
            })
    }


    return (
        <AssessmentContext.Provider value={{ createAssessment, userAssessmenteList, assessmentList }}>
            {children}
        </AssessmentContext.Provider>
    )
}

export { AssessmentProvider, useAssessmentContext }