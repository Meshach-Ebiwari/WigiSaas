import React from 'react';
import {
    ProductContainer,
    ProductWrap,
    ProductCard,
    PCardContent,
    ProductCardTitle,
    ProductDesc,
    ProductButton
} from './ComponentElements'

const Product = ({title1, title2}) => {
    return (
       <ProductContainer>
           <ProductWrap>
                <ProductCard>
                    <PCardContent>
                        <ProductCardTitle>
                            {title1}
                        </ProductCardTitle>
                        <ProductDesc>Lorem ipsum
                          <span> dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</span>
                        </ProductDesc>
                        <ProductButton to="/0">Read</ProductButton>
                    </PCardContent>
                </ProductCard>
                <ProductCard>
                    <PCardContent>
                        <ProductCardTitle>
                            {title2}
                        </ProductCardTitle>
                        <ProductDesc>
                        Lorem ipsum  <span> dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</span>
                        </ProductDesc>
                        <ProductButton to="/0">Read</ProductButton>
                    </PCardContent>
                </ProductCard>
           </ProductWrap>
       </ProductContainer>
    )
}

export default Product
