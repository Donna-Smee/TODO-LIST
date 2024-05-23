import "./page.css";

interface Props {
  lists: {name: String, items: {name: String, checked: Boolean}[], active: Boolean}[] 
}




const ListsPage = ({lists}: Props) => {
  
  
  return (
    <>
    
      <div  className='page-margin'>ListsPage
        <ul>
          {lists.map((list, index) =>
            <p>{`${list.name} is list number ${index}`}</p>
          )}
        </ul>
      </div>
      
      
    
    </>
  )
}

export default ListsPage