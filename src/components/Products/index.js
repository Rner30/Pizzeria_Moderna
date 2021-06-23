import React from "react";
import {
	ProductsContainer,
	ProductsHeading,
	ProductsWrapper,
	ProductCard,
	ProductImg,
	ProductInfo,
	ProductTitle,
	ProductDesc,
	ProductPrice,
	ProductButton,
} from "./ProductsElements";
export default function Products({heading,data}) {
	return (
		<ProductsContainer>
			<ProductsHeading> {heading} </ProductsHeading>
			<ProductsWrapper>
				{data.map((producto, index) => {
					return (
						<ProductCard key={index}>
							<ProductImg src={producto.img} alt={producto.alt} />
							<ProductInfo>
								<ProductTitle>{producto.name}</ProductTitle>
								<ProductDesc>{producto.desc}</ProductDesc>
								<ProductPrice>{producto.price}</ProductPrice>
								<ProductButton>{producto.button}</ProductButton>
							</ProductInfo>
						</ProductCard>
					);
				})}
			</ProductsWrapper>
		</ProductsContainer>
	);
}
