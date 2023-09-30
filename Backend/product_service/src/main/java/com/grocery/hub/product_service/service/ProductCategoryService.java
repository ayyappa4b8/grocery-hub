package com.grocery.hub.product_service.service;

import com.grocery.hub.product_service.dto.ProductCategoryDTO;
import com.grocery.hub.product_service.entity.ProductCategory;
import com.grocery.hub.product_service.exceptions.ProductNotFoundException;
import com.grocery.hub.product_service.repository.ProductCategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ProductCategoryService {

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    @Autowired
    private ModelMapper modelMapper;
    public String saveProductCategory(String categoryName, String description) {
        ProductCategory productCategory = new ProductCategory();
        productCategory.setProductCategoryName(categoryName);
        productCategory.setDescription(description);
        productCategoryRepository.save(productCategory);

        return StringUtils.SPACE;
    }

    public List<ProductCategoryDTO> getALlProductCategories() {
        List<ProductCategory> productCategories =  productCategoryRepository.findAll();

        return productCategories.stream()
                .map(productCategory -> modelMapper.map(productCategory, ProductCategoryDTO.class))
                .collect(Collectors.toList());
    }

    public void deleteProductCategoryById(long categoryId) {

        Optional<ProductCategory> category = productCategoryRepository.findByCategoryId(categoryId);
        if(category.isPresent()) {
            productCategoryRepository.deleteById(categoryId);
            log.info("product category deleted with id "+categoryId);
        }
        else {
            throw new ProductNotFoundException("Product with "+categoryId+" not found!");
        }
    }

    public String updateProductCategoryById(long productCategoryId, String categoryName, String description) throws IOException {
        Optional<ProductCategory> category = productCategoryRepository.findByCategoryId(productCategoryId);

        if(category.isEmpty())
        {
            throw new ProductNotFoundException("Product with "+category+" not found!");
        }
        category.get().setProductCategoryName(categoryName);
        category.get().setDescription(description);
        productCategoryRepository.save(category.get());
        log.info("Product "+category.get().getCategoryId()+" is Updated");
        return "Product "+category.get().getCategoryId()+" is Updated";
    }

    public ProductCategoryDTO findProductCategoryById(long categoryId) {
        Optional<ProductCategory> productCategory = productCategoryRepository.findByCategoryId(categoryId);

        return modelMapper.map(productCategory.get(), ProductCategoryDTO.class);
    }
}
