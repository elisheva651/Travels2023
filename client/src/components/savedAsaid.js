
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,

//     },
//   },
// };

// const [countries, setCountries] = useState([]);
// const [isLoadingCountries, setIsLoadingCountries] = useState(true);
// const [isErrorCountries, setIsErrorCountries] = useState(false);



// useEffect(() => {
  
//   fetch('http://localhost:3000/countries').then(res => res.json()).then((json) => {
//   // console.log(json)
  
//     setIsLoadingCountries(false);
//     setCountries(json);
//   }).catch(error => {
//     setIsLoadingCountries(false);
//     setIsErrorCountries(true);
//   });
  
// }, []);


{/* <div>  
    <InputCountry isErrorCountries={isErrorCountries} isLoadingCountries={isLoadingCountries} selectedCountries={selectedCountries} countries={countries} setSelectedCountries={setSelectedCountries}/>
    <CountriesToShow theCountry={{selectedCountries, travels}}/>  
</div> */}