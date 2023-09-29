package com.grocery.hub.ordservice.entity;

import java.time.Instant;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CustomerOrder {
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="order_id")
	private long orderId;
	
	private Instant orderDate;
	private String orderStatus;
	
//	@Temporal(TemporalType.DATE)
//	private Date orderDate;
//	@ManyToOne()
//	@ManyToOne
//	@JoinColumn(name = "customerId")
//	private Customer customer;
	private long customerId;
	private String customerName;
	private String customerEmail;
	private long customerContact;
	private long totalAmount;
	private String customerAddress;
//	private long customerId;
	
	@OneToMany(targetEntity=OrderItems.class,cascade = CascadeType.ALL)
	@JoinColumn(name="fk_order_id",referencedColumnName="order_id")
	private List<OrderItems> orderItems;
	
}