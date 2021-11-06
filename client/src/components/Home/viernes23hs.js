<ActivityForm onChange={handleChange}  elem={elem} index={index} ></ActivityForm>





export default function SearchBar() {

    let countries = useSelector(state => state.allCountries)

    let [input, setInput] = useState({
        client: "",
        validator: ""
    })

    let history = useHistory();


    function handleChange(e) {
        setInput({
            ...input,
            client: e.target.value,
        });
    }


    function handleSubmit(e) {
        e.preventDefault();


        if (!id) {
            alert("El pais ingresado no existe")
        } else {
            history.push("/CountryDetails/" + id)
        }

    }}



    function handleChange(e) {

        if (e.target.value !== 'default') {
            dispatch(getByOrder(e.target.value));

        }
        setControl(e.target.value)
    }

    useEffect(() => {
        if (control !== 'default') setElementsToShow(orderedFromState)
        else setElementsToShow(allCountriesFromState)
    }, [control, orderedFromState, allCountriesFromState, setControl])



    
    /* useEffect(() => {
        if (control !== 'default') setElementsToShow(orderedFromState)
        else setElementsToShow(allCountriesFromState)
    }, [ orderedFromState, allCountriesFromState, control ]) */




       //let [control, setControl] = useState("default")

   // useEffect(()=>{orderedFromState})