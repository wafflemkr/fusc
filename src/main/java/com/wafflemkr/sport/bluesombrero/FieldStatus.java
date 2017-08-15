package com.wafflemkr.sport.bluesombrero;

import java.io.IOException;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;


public class FieldStatus {
	
	
	private ArrayList<FieldStatusType> fields = new ArrayList<FieldStatusType>();
	
	private Document doc;
	
	public FieldStatus() {
		
		try {
			doc = Jsoup.connect(BlueSombreroConstants.fuscFieldStatusUrl).get();
		} catch (IOException e) {
			doc = null;
			e.printStackTrace();
		}
	}
	
	public JSONObject getFieldElements(String fieldCSSClass) {
		
		if (doc == null) {
			return null;
		}
		
		Elements elems = doc.select(fieldCSSClass);
		
		Elements listItems = elems.select("li");
		
		for (Element element : listItems) {
			
			FieldStatusType fd = new FieldStatusType();
			String text = element.text();
			String delim = "Updated:";
			String[] tokens = text.split(delim);
			fd.setFieldName(tokens[0]);
			fd.setUpdated(tokens[1]);
			if (element.toString().contains("open")) { 
				fd.setStatus("OPEN");
			} else if (element.toString().contains("close")) {
				fd.setStatus("CLOSED");
			} else if (element.toString().contains("partial")) {
				fd.setStatus("PARTIALLY");
			}
			fields.add(fd);
		}
		//JSONObject obj = new JSONObject("fields", new JSONArray(fields));
		JSONObject obj;
		try {
			obj = new JSONObject();
			JSONArray items = new JSONArray(fields);
			obj.put("fields", items);
			return obj;
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}
	

}

