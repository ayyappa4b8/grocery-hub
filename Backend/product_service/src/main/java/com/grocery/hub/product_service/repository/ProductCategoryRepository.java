package com.grocery.hub.product_service.repository;

import com.grocery.hub.product_service.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Long> {
    ProductCategory findByCategoryId(long categoryId);
}
