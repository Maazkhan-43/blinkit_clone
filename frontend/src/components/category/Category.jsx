import './Category.css'

function Category({image_url,category}) {
    ;
    return (
        <div className='Category'>
            <img src={image_url} alt=''/>
            <p>{category}</p>
        </div>
    )
}

export default Category