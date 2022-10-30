const ResultItem = ({data}) => {


    return (
        <div className="results-item-container">
            <img src={data.product_photos[0]} />
            <h2>{data.offer.store_name}</h2>
            <h2>{data.product_title}</h2>
            <p>{data.offer.price}</p>
            <a href={data.offer.offer_page_url}>Buy Here</a>
        </div>
    )

}
export default ResultItem;