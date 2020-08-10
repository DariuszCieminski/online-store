package pl.swaggerexample.security;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint
{
	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException
	{
		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
		response.getWriter().print("UNAUTHORIZED");
		response.flushBuffer();
	}
}