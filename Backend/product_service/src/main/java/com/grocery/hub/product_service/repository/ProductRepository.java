package com.grocery.hub.product_service.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grocery.hub.product_service.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{

	List<Product> findByCategory(Long categoryId);

}
