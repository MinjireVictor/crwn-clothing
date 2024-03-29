import { BackgroundImage,DirectoryBodyContainer,DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = ({category})=>{
    const {imageUrl, title}=category;
    console.log(imageUrl)

    return(
        <DirectoryItemContainer>
            <BackgroundImage
            imageUrl={imageUrl}
             
            />
            <DirectoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>

            </DirectoryBodyContainer>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem