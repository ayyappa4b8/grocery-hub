package com.grocery.hub.shoppingcartservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.hub.shoppingcartservice.common.AddToCartDto;
import com.grocery.hub.shoppingcartservice.common.AddToCartResponse;
import com.grocery.hub.shoppingcartservice.entity.Cart;
import com.grocery.hub.shoppingcartservice.service.CartService;


@RestController
//@CrossOrigin(origins="*")
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	@PostMapping("/addToCart/{id}")
	public AddToCartResponse addToCart(@PathVariable("id") long custId,@RequestBody AddToCartDto addToCartDto) {
		
		return cartService.addToCart(custId,addToCartDto);
	}
	
	@PostMapping("/addToCartt/{id}")
	public String addToCartt(@PathVariable("id") long custId,@RequestBody AddToCartDto addToCartDto) {
		
		return cartService.addToCartt(custId,addToCartDto);
	}
	
	
	@PostMapping("/updateAndAddProduct/{id}")
	public String updateAndAddProd(@PathVariable("id") long custId,@RequestBody AddToCartDto addToCartDto) {
		
		return cartService.updateAndAddProduct(custId, addToCartDto);
	}
	
	@GetMapping("/checkProductInCart/{custId}/{pid}")
	public Cart checkProductInCart(@PathVariable("custId") long custId,@PathVariable("pid") long pid)
	{
		return cartService.checkProductInCart(custId, pid);
	}
	
	
	
	@GetMapping("/{custId}")
	public AddToCartResponse show(@PathVariable("custId") long custId)
	{
		return cartService.getCartItemsById(custId);
	}
	
	@GetMapping("/countItems/{custId}")
	public long countCartItems(@PathVariable("custId") long custId)
	{
		return cartService.countCartItems(custId);
	}
	
	@GetMapping("/cartItem/{custId}")
	public List<Cart> getCartItemsByCustomerId(@PathVariable("custId") long custId) {
		return cartService.getCartItems(custId);
	}
	
	@DeleteMapping("/del/{custId}")
	public void deleteCartByCustomerId(@PathVariable("custId") long custId) {
		cartService.delCartByCustomerId(custId);
	}
	
	@DeleteMapping("/delProduct/{custId}/{productId}")
	public AddToCartResponse deleteCartItemById(@PathVariable("custId") long custId,@PathVariable("productId")long productId) {
		return cartService.deleteCartItemById(custId,productId);
	}
	
}
