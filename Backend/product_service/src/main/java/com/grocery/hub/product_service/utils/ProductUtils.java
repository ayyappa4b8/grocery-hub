package com.grocery.hub.product_service.utils;

import com.grocery.hub.product_service.dto.ProductResponse;
import com.grocery.hub.product_service.entity.Product;

import java.util.ArrayList;
import java.util.List;

public class ProductUtils {

    public static ProductResponse convertProductEntityToProductResponseDto(Product product) {
        ProductResponse productResponse = new ProductResponse();
        productResponse.setProductId(product.getProductId());
        productResponse.setProductName(product.getProductName());
        productResponse.setProductPrice(product.getProductPrice());
        productResponse.setProductImage(product.getProductImage());
        productResponse.setCategory(product.getCategory().getProductCategoryName());
        productResponse.setDescription(product.getDescription());

        return productResponse;
    }

    public static List<ProductResponse> convertProductListToProductResponseList(List<Product> products) {
        List<ProductResponse> productResponse = new ArrayList<>();
        for (Product product : products) {
            productResponse.add(convertProductEntityToProductResponseDto(product));
        }

        return productResponse;
    }

}
