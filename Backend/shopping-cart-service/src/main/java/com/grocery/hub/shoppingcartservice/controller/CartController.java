package com.grocery.hub.shoppingcartservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grocery.hub.shoppingcartservice.common.AddToCartDto;
import com.grocery.hub.shoppingcartservice.common.AddToCartResponse;
import com.grocery.hub.shoppingcartservice.entity.Cart;
import com.grocery.hub.shoppingcartservice.service.CartService;


@RestController
//@CrossOrigin(origins="*")
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
	
	@GetMapping("/{cust-id}/{pid}")
	public Cart checkProductInCart(@PathVariable("cust-id") long custId,@PathVariable("pid") long pid)
	{
		return cartService.checkProductInCart(custId, pid);
	}
	
	
	
	@GetMapping("/{cust-id}")
	public AddToCartResponse show(@PathVariable("cust-id") long custId)
	{
		return cartService.getCartItemsById(custId);
	}
	
	@GetMapping("/count-items/{cust-id}")
	public long countCartItems(@PathVariable("cust-id") long custId)
	{
		return cartService.countCartItems(custId);
	}
	
	@GetMapping("/cart-item/{cust-id}")
	public List<Cart> getCartItemsByCustomerId(@PathVariable("cust-id") long custId) {
		return cartService.getCartItems(custId);
	}
	
	@DeleteMapping("/{cust-id}")
	public void deleteCartByCustomerId(@PathVariable("cust-id") long custId) {
		cartService.delCartByCustomerId(custId);
	}
	
	@DeleteMapping("/customers/{cust-id}/products/{product-id}")
	public AddToCartResponse deleteCartItemById(@PathVariable("cust-id") long custId,@PathVariable("product-id")long productId) {
		return cartService.deleteCartItemById(custId,productId);
	}
	
}
