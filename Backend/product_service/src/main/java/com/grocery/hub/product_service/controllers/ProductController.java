package com.grocery.hub.product_service.controllers;
import java.io.IOException;
import java.util.List;

import com.grocery.hub.product_service.dto.ProductCategoryRequest;
import com.grocery.hub.product_service.dto.ProductResponse;
import com.grocery.hub.product_service.entity.ProductCategory;
import com.grocery.hub.product_service.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.grocery.hub.product_service.entity.Product;
import com.grocery.hub.product_service.service.ProductService;

@RestController
//@CrossOrigin(origins ="*")
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductCategoryService productCategoryService;
	


	@PostMapping(value="/saveProduct",consumes="multipart/form-data")
	@ResponseStatus(HttpStatus.CREATED)
	public String createProduct(@RequestParam("productImage") MultipartFile productImage,
			@RequestParam("productName") String productName,
			@RequestParam("productCategory") long productCategory,
	        @RequestParam("description") String description,
	        @RequestParam("productPrice") long productPrice)throws IOException{
		
		return productService.createProduct(productImage,productName,productCategory,description,productPrice);
	}
	
	
	
	@GetMapping("/allProducts")
	@ResponseStatus(HttpStatus.OK)
	public List<ProductResponse> getAllProducts(){
		return productService.getAllProducts();
	}
	
	@GetMapping("/cat/{category}")
	public List<Product> getProductByCategory(@PathVariable("category") long category){
		System.out.println(category);
		return productService.getProductByCatgeory(category);
	}
	
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable("id") long productId) {
		return productService.getProductById(productId);
	}
	
	@GetMapping("/sort/{offset}/{pageSize}")
	public Page<ProductResponse> paginationProduct(@PathVariable("offset") int offset,@PathVariable("pageSize") int pageSize)
	{
		return productService.paginationProduct(offset,pageSize);
	}
	
	@PutMapping(value="/update/{id}",consumes="multipart/form-data")
	public String updateProduct(@PathVariable("id") long productId,
			@RequestParam("productImage") MultipartFile productImage,
			@RequestParam("productName") String productName,
			@RequestParam("productCategory") long productCategoryId,
	        @RequestParam("description") String description,
	        @RequestParam("productPrice") long productPrice
	        ) throws IOException{
		
		return productService.updateProductById(productImage,productName,productCategoryId,description,productPrice, productId);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteProduct(@PathVariable("id") long productId) {
		productService.deleteProductById(productId);
		return "product with "+productId+" deleted succesfully";
	}


	@PostMapping(value="/saveProductCategory")
	@ResponseStatus(HttpStatus.CREATED)
	public String createProductCategory(@RequestParam("productCategory") String productCategory,
								@RequestParam("description") String description)throws IOException{

		return productCategoryService.saveProductCategory(productCategory,description);
	}

	@GetMapping("/allProductCategories")
	@ResponseStatus(HttpStatus.OK)
	public List<ProductCategory> getAllProductCategories(){
		return productCategoryService.getALlProductCategories();
	}

	@DeleteMapping("/delete/category/{id}")
	public String deleteProductCategory(@PathVariable("id") long categoryId) {
		productCategoryService.deleteProductCategoryById(categoryId);
		return "product actegory with "+categoryId+" deleted succesfully";
	}

	@PutMapping(value="/update/category/{id}")
	public String updateProduct(@PathVariable("id") long productId,
								@RequestBody ProductCategoryRequest productCategoryRequest
								) throws IOException{

		return productCategoryService.updateProductCategoryById(productId,productCategoryRequest.getEditedProductCategory(),productCategoryRequest.getEditedDescription());
	}

	@GetMapping("/category/{id}")
	public ProductCategory getProductCategoryById(@PathVariable("id") long categoryId) {
		return productCategoryService.findProductCategoryById(categoryId);
	}

}
