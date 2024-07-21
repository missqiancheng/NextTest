

export default function Home() {
  return (
    <div className="navbar"  style={{width: '90%'}}>  
    <nav>  
      <ul>  
        <li><a href="#home">Filter by</a></li>  
        <select defaultValue={"AllProduct"} className="custom-select">  
          <option className="font-sans" value="AllPrduct">Alroduct</option>  
          <option value="Figme">Figme</option>  
          <option value="Figmes">Figmes</option>  
          <option value="Figme">Figme</option>  
        </select> 
        <select defaultValue={"AllProduct"} className="custom-select">  
          <option className="font-sans" value="AllPrduct">Alroduct</option>  
          <option value="Figme">Figme</option>  
          <option value="Figmes">Figmes</option>  
          <option value="Figme">Figme</option>  
        </select> 
        <select defaultValue={"AllProduct"} className="custom-select sm:invisible">  
          <option className="font-sans" value="AllPrduct">Alroduct</option>  
          <option value="Figme">Figme</option>  
          <option value="Figmes">Figmes</option>  
          <option value="Figme">Figme</option>  
        </select> 
      </ul>  
    </nav>  
  </div> 
  );
}

