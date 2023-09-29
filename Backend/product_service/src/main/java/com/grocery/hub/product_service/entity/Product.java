package com.grocery.hub.product_service.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long productId;
	private String productName;
	//private String productCategory;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id", nullable = false)
	private ProductCategory category;

	private String description;
	private long productPrice;
	@Lob
	@Column(name = "productImage", columnDefinition="LONGBLOB")
	private byte[] productImage;
}
