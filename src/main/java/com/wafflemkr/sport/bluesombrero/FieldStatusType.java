package com.wafflemkr.sport.bluesombrero;

public class FieldStatusType {
	
	String fieldName;
	
	String status;
	
	String updated;
	
	public FieldStatusType(String fieldName, String status, String updated) {
		this.fieldName = fieldName;
		this.status = status;
		this.updated = updated;
	}

	public FieldStatusType() {
		
	}

	public String getFieldName() {
		return fieldName;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getUpdated() {
		return updated;
	}

	public void setUpdated(String updated) {
		this.updated = updated;
	}
		

}
