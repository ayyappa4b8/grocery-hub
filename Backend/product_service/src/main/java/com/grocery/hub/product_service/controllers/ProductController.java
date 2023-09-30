package com.grocery.hub.product_service.controllers;

import com.grocery.hub.product_service.dto.ProductCategoryDTO;
import com.grocery.hub.product_service.dto.ProductCategoryRequest;
import com.grocery.hub.product_service.dto.ProductDTO;
import com.grocery.hub.product_service.service.ProductCategoryService;
import com.grocery.hub.product_service.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductCategoryService productCategoryService;
	


	@PostMapping(consumes="multipart/form-data")
	@ResponseStatus(HttpStatus.CREATED)
	public String createProduct(@RequestParam("productImage") MultipartFile productImage,
			@RequestParam("productName") String productName,
			@RequestParam("productCategory") long productCategory,
	        @RequestParam("description") String description,
	        @RequestParam("productPrice") long productPrice)throws IOException{
		
		return productService.createProduct(productImage,productName,productCategory,description,productPrice);
	}
	
	
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<ProductDTO> getAllProducts(){
		return productService.getAllProducts();
	}
	
	@GetMapping("/{category-id}")
	public List<ProductDTO> getProductByCategory(@PathVariable("category-id") long category){
		System.out.println(category);
		return productService.getProductByCatgeory(category);
	}
	
	@GetMapping("/{id}")
	public ProductDTO getProductById(@PathVariable("id") long productId) {
		return productService.getProductById(productId);
	}
	
	@GetMapping("/sort/{offset}/{page-size}")
	public Page<ProductDTO> paginationProduct(@PathVariable("offset") int offset,@PathVariable("page-size") int pageSize)
	{
		return productService.paginationProduct(offset,pageSize);
	}
	
	@PutMapping(value="/{id}",consumes="multipart/form-data")
	public String updateProduct(@PathVariable("id") long productId,
			@RequestParam("productImage") MultipartFile productImage,
			@RequestParam("productName") String productName,
			@RequestParam("productCategory") long productCategoryId,
	        @RequestParam("description") String description,
	        @RequestParam("productPrice") long productPrice
	        ) throws IOException{
		
		return productService.updateProductById(productImage,productName,productCategoryId,description,productPrice, productId);
	}
	
	@DeleteMapping("/{id}")
	public String deleteProduct(@PathVariable("id") long productId) {
		productService.deleteProductById(productId);
		return "product with "+productId+" deleted succesfully";
	}


	@PostMapping(value="/categories")
	@ResponseStatus(HttpStatus.CREATED)
	public String createProductCategory(@RequestParam("productCategory") String productCategory,
								@RequestParam("description") String description)throws IOException{

		return productCategoryService.saveProductCategory(productCategory,description);
	}

	@GetMapping("/categories")
	@ResponseStatus(HttpStatus.OK)
	public List<ProductCategoryDTO> getAllProductCategories(){
		return productCategoryService.getALlProductCategories();
	}

	@DeleteMapping("/categories/{id}")
	public String deleteProductCategory(@PathVariable("id") long categoryId) {
		productCategoryService.deleteProductCategoryById(categoryId);
		return "product actegory with "+categoryId+" deleted succesfully";
	}

	@PutMapping(value="/categories/{id}")
	public String updateProduct(@PathVariable("id") long productId,
								@RequestBody ProductCategoryRequest productCategoryRequest
								) throws IOException{

		return productCategoryService.updateProductCategoryById(productId,productCategoryRequest.getEditedProductCategory(),productCategoryRequest.getEditedDescription());
	}

	@GetMapping("/categories/{id}")
	public ProductCategoryDTO getProductCategoryById(@PathVariable("id") long categoryId) {
		return productCategoryService.findProductCategoryById(categoryId);
	}

}
