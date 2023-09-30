package com.grocery.hub.product_service.service;


import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.grocery.hub.product_service.dto.ProductDTO;
import com.grocery.hub.product_service.entity.ProductCategory;
import com.grocery.hub.product_service.entity.Product;
import com.grocery.hub.product_service.exceptions.ProductNotFoundException;
import com.grocery.hub.product_service.repository.ProductRepository;
import org.modelmapper.ModelMapper;
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

	@Autowired
	private ModelMapper modelMapper;

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
	
	public List<ProductDTO> getAllProducts(){
		List<Product> products = productRepository.findAll();
		return products.stream()
				.map(product -> modelMapper.map(product, ProductDTO.class))
				.collect(Collectors.toList());
	}
	
	public List<ProductDTO> getProductByCatgeory(long categoryId){
		List<Product> products = productRepository.findByCategory(categoryId);
		return products.stream()
				.map(product -> modelMapper.map(product, ProductDTO.class))
				.collect(Collectors.toList());
	}
	
	public ProductDTO getProductById(long productId) {
		Optional<Product> product = productRepository.findById(productId);
		if(product.isEmpty())
		{
			throw new ProductNotFoundException("Product with "+productId+" not found!");
		}
		else {
			return modelMapper.map(product, ProductDTO.class);
		}
	}
	
	public Page<ProductDTO> paginationProduct(int offset,int pageSize)
	{ 
		Page<Product> productPage =productRepository.findAll(PageRequest.of(offset,pageSize));

		Page<ProductDTO> productDTOPage = productPage.map(product -> modelMapper.map(product, ProductDTO.class));
		return productDTOPage;
		
	}
	
	public String updateProductById(MultipartFile file,String productName,
			long productCategoryId,String description,long productPrice,long productId) throws IOException {
		
		Optional<Product> product = productRepository.findById(productId);
		
		if(product.isEmpty())
		{
			throw new ProductNotFoundException("Product with "+productId+" not found!");
		}
		Product prod = product.get();
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
		
		Optional<Product> prod = productRepository.findById(productId);
		if(prod!=null) {
			productRepository.deleteById(productId);
			log.info("product deleted with id "+productId);
		}
		else {
			throw new ProductNotFoundException("Product with "+productId+" not found!");
		}
	}
}
