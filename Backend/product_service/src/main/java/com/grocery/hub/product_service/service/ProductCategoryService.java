package com.grocery.hub.product_service.service;

import com.grocery.hub.product_service.entity.ProductCategory;
import com.grocery.hub.product_service.exceptions.ProductNotFoundException;
import com.grocery.hub.product_service.repository.ProductCategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
@Slf4j
public class ProductCategoryService {

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    public String saveProductCategory(String categoryName, String description) {
        ProductCategory productCategory = new ProductCategory();
        productCategory.setProductCategoryName(categoryName);
        productCategory.setDescription(description);
        productCategoryRepository.save(productCategory);

        return StringUtils.SPACE;
    }

    public List<ProductCategory> getALlProductCategories() {
        return productCategoryRepository.findAll();
    }

    public void deleteProductCategoryById(long categoryId) {

        ProductCategory category = productCategoryRepository.findByCategoryId(categoryId);
        if(category!=null) {
            productCategoryRepository.deleteById(categoryId);
            log.info("product category deleted with id "+categoryId);
        }
        else {
            throw new ProductNotFoundException("Product with "+categoryId+" not found!");
        }
    }

    public String updateProductCategoryById(long productCategoryId, String categoryName, String description) throws IOException {
        ProductCategory category = productCategoryRepository.findByCategoryId(productCategoryId);

        if(category==null)
        {
            throw new ProductNotFoundException("Product with "+category+" not found!");
        }
        category.setProductCategoryName(categoryName);
        category.setDescription(description);
        productCategoryRepository.save(category);
        log.info("Product "+category.getCategoryId()+" is Updated");
        return "Product "+category.getCategoryId()+" is Updated";
    }

    public ProductCategory findProductCategoryById(long categoryId) {
        return productCategoryRepository.findByCategoryId(categoryId);
    }
}
