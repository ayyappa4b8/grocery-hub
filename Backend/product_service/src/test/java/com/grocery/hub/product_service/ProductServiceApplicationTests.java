package com.grocery.hub.product_service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.io.IOException;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.grocery.hub.product_service.entity.Product;
import com.grocery.hub.product_service.repository.ProductRepository;
import com.grocery.hub.product_service.service.ProductService;

@SpringBootTest
class ProductServiceApplicationTests {

	@Autowired
	private ProductService productService;
	
	@MockBean
	private ProductRepository productRepository;
	
	
	@Test
	public void saveProductTest() throws IOException
	{
		Product p = new Product();
		p.setProductId(1);
		p.setProductName("abcd");
		//p.setProductCategory("fruits");
		p.setProductImage(new byte[0]);
		p.setDescription("cvbc");
		p.setProductPrice(100);
		
		when(productRepository.save(p)).thenReturn(p);
	}
	
	
	/*@Test
	public void getProductById() {
		Product prod = new Product();
		prod.setProductId(101);
		prod.setProductName("apples");
		prod.setProductCategory("fruits");
		prod.setProductPrice(120);
		prod.setProductImage(new byte[0]);
		when(productRepository.findByProductId(101)).thenReturn(prod);
		Product p = productService.getProductById(101);
		assertEquals(prod,p);
	}*/
	
	/*@Test
	public void getAllProducts() {
		when(productRepository.findAll()).thenReturn(Stream
				.of(new Product(3,"csrf","desc","dairy",120,new byte[0]),new Product(4,"dwdue","desc","dairy",120,new byte[0])).collect(Collectors.toList()));
		
		assertEquals(2,productService.getAllProducts().size());
	}*/
	
	
	//@Test
	/*public void deleteProductByIdTest()
	{
		Product prod = new Product();
		prod.setProductId(101);
		prod.setProductName("apples");
		//prod.setProductCategory("fruits");
		prod.setProductPrice(120);
		prod.setProductImage(new byte[0]);
		when(productRepository.findByProductId(101)).thenReturn(prod);
		productService.deleteProductById(101);
        verify(productRepository, times(1)).deleteById(101L);

	}*/
	
	/*@Test
	public void getProductsByCategory()
	{
		when(productRepository.findByCategory(3L)).thenReturn(Stream
				.of(new Product(3,"csrf",3L,"dairy",120,new byte[0]),new Product(4,"dwdue","desc","dairy",120,new byte[0])).collect(Collectors.toList()));
		
		assertEquals(2,productService.getProductByCatgeory("dairy").size());
	}*/

}
