package com.grocery.hub.product_service.repository;

import com.grocery.hub.product_service.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Long> {
    Optional<ProductCategory> findByCategoryId(long categoryId);
}
