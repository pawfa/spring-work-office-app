package com.workoffice;

import com.workoffice.entity.Offer;
import com.workoffice.service.OffersService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WorkofficeApplicationTests {

	private MockMvc mvc;
	String content = "Hello World";

	@Autowired
	private WebApplicationContext webApplicationContext;

	@Before
	public void setup() throws Exception {
		this.mvc = webAppContextSetup(webApplicationContext).build();

	}

	@Test
	public void checkIfGetDataIsCorrect() throws Exception {
		mvc.perform(get("/" ).accept(MediaType.APPLICATION_JSON))
            .andDo(print())
				.andExpect(status().isOk())
				.andExpect(jsonPath("content").value(content));

	}
}
