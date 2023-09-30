package com.grocery.hub.shoppingcartservice.controller;

import com.grocery.hub.shoppingcartservice.common.AddToCartDto;
import com.grocery.hub.shoppingcartservice.common.AddToCartResponse;
import com.grocery.hub.shoppingcartservice.dto.CartDTO;
import com.grocery.hub.shoppingcartservice.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/cart")
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	@PostMapping("/addToCart/{id}")
	public AddToCartResponse addToCart(@PathVariable("id") long custId,@RequestBody AddToCartDto addToCartDto) {
		
		return cartService.addToCart(custId,addToCartDto);
	}
	
	@PostMapping("/{id}")
	public String addToCartt(@PathVariable("id") long custId,@RequestBody AddToCartDto addToCartDto) {
		
		return cartService.addToCartt(custId,addToCartDto);
	}

	@PutMapping("/{id}")
	public String updateAndAddProd(@PathVariable("id") long custId,@RequestBody AddToCartDto addToCartDto) {
		
		return cartService.updateAndAddProduct(custId, addToCartDto);
	}
	
	@GetMapping("/{customer_id}/{pid}")
	public CartDTO checkProductInCart(@PathVariable("customer_id") long custId,@PathVariable("pid") long pid)
	{
		return cartService.checkProductInCart(custId, pid);
	}
	
	@GetMapping("/{customer_id}")
	public AddToCartResponse show(@PathVariable("customer_id") long custId)
	{
		return cartService.getCartItemsById(custId);
	}
	
	@GetMapping("/count-items/{customer_id}")
	public long countCartItems(@PathVariable("customer_id") long custId)
	{
		return cartService.countCartItems(custId);
	}
	
	@GetMapping("/cart-item/{customer_id}")
	public List<CartDTO> getCartItemsByCustomerId(@PathVariable("customer_id") long custId) {
		return cartService.getCartItems(custId);
	}
	
	@DeleteMapping("/{customer_id}")
	public void deleteCartByCustomerId(@PathVariable("customer_id") long custId) {
		cartService.delCartByCustomerId(custId);
	}
	
	@DeleteMapping("/customers/{customer_id}/products/{product-id}")
	public AddToCartResponse deleteCartItemById(@PathVariable("customer_id") long custId,@PathVariable("product-id")long productId) {
		return cartService.deleteCartItemById(custId,productId);
	}
	
}
