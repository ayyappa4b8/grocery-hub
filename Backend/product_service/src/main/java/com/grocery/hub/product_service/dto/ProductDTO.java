package com.grocery.hub.product_service.dto;

import com.grocery.hub.product_service.entity.ProductCategory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    private long productId;
    private String productName;
    private ProductCategoryDTO category;
    private String description;
    private long productPrice;
    private byte[] productImage;
}
