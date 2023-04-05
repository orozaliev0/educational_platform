const [email, setEmail] = useState('')
const [tel, setTel] = useState('')
const [num, setNum] = useState(0)
const [radio, setRadio] = useState(false)

function handleRadio(e) {
    setRadio(e.target.value)
}

function handleNum(e) {
    setNum(e.target.value)
}

function handleEmail(e) {
    setEmail(e.target.value)
}

const handleValueTel = (e) => {
    setTel(e.target.value)
}
const handleSubmit = () => {
    if (!email || !tel || !num || !radio) {
        Swal.fire({
            icon: 'error', title: 'Oops...',
            text: 'Заполните поля пожалуйста!',
        })
    } else {
        navigate('/expectation')
        setTimeout(() => {
            navigate('/success')
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }, 1000)
    }
}
