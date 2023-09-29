package com.grocery.hub.product_service.service;


import java.io.IOException;
import java.util.List;

import com.grocery.hub.product_service.entity.ProductCategory;
import com.grocery.hub.product_service.utils.ProductUtils;
import com.grocery.hub.product_service.dto.ProductResponse;
import com.grocery.hub.product_service.entity.Product;
import com.grocery.hub.product_service.exceptions.ProductNotFoundException;
import com.grocery.hub.product_service.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	
	public String createProduct(MultipartFile file,String productName,
			long productCategory,String description,long productPrice) throws IOException{
		Product prod = new Product();
		prod.setProductName(productName);
		ProductCategory category = new ProductCategory();
		category.setCategoryId(productCategory);
		prod.setCategory(category);
		prod.setDescription(description);
		prod.setProductPrice(productPrice);
		prod.setProductImage(file.getBytes());
		productRepository.save(prod);
		log.info("Product "+prod.getProductId()+" is inserted");
		return "Product "+prod.getProductId()+" is inserted";
		
	}
	
	public List<ProductResponse> getAllProducts(){
		List<Product> products = productRepository.findAll();
		return ProductUtils.convertProductListToProductResponseList(products);
	}
	
	public List<Product> getProductByCatgeory(long categoryId){
		List<Product> products = productRepository.findByCategory(categoryId);
		return products;
	}
	
	public Product getProductById(long productId) {
		Product p = productRepository.findByProductId(productId);
		if(p==null)
		{
			throw new ProductNotFoundException("Product with "+productId+" not found!");
		}
		else {
			return p;
		}
	}
	
	public Page<ProductResponse> paginationProduct(int offset,int pageSize)
	{ 
		Page<ProductResponse> products=productRepository.findAll(PageRequest.of(offset,pageSize)).map(ProductUtils::convertProductEntityToProductResponseDto);
		return products;
		
	}
	
	public String updateProductById(MultipartFile file,String productName,
			long productCategoryId,String description,long productPrice,long productId) throws IOException {
		
		Product prod = productRepository.findByProductId(productId);
		
		if(prod==null)
		{
			throw new ProductNotFoundException("Product with "+productId+" not found!");
		}
		prod.setProductName(productName);
		ProductCategory productCategory = new ProductCategory();
		productCategory.setCategoryId(productCategoryId);
		prod.setCategory(productCategory);
		prod.setDescription(description);
		prod.setProductPrice(productPrice);
		prod.setProductImage(file.getBytes());		
		productRepository.save(prod);
		log.info("Product "+prod.getProductId()+" is Updated");
		return "Product "+prod.getProductId()+" is Updated";
		
	}
	
	public void deleteProductById(long productId) {
		
		Product prod = productRepository.findByProductId(productId);
		if(prod!=null) {
			productRepository.deleteById(productId);
			log.info("product deleted with id "+productId);
		}
		else {
			throw new ProductNotFoundException("Product with "+productId+" not found!");
		}
//				.orElseThrow(()-> new ProductNotFoundException("Product with "+productId+" not found!"));
		
	}
	

}
