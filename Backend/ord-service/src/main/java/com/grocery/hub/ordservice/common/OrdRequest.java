package com.grocery.hub.ordservice.common;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrdRequest {
	
	private String customerAddress;
	private long customerContact;
//	private List<OrdItems> ordItems;
}
