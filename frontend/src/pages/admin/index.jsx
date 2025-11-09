import { useNavigate } from 'react-router'

function Admin() {
  const navigation = useNavigate();

  navigation('/admin/accounts', { replace: true })


  return null
}

export default Admin