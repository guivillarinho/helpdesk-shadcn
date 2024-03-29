import axios from '@/lib/axios'
interface FileProps {
  id: string
  filename: string
  mimetype: string
}
interface GetHelpDeskResponse {
  id: string
  category: string
  title: string
  description: string
  user: {
    name: string
  }
  accountable: string
  files?: FileProps[]
  countFiles: number
  status: string
  createdAt: Date
  comments: {
    id: string
    message: string
  }
}

const token = localStorage.getItem('access_token')
const headers = {
  headers: {
    Authorization: `bearer ${token}`,
  },
}

export async function getHelpDesk() {
  const response = await axios.get<GetHelpDeskResponse[]>('/helpdesk', headers)
  return response.data
}
