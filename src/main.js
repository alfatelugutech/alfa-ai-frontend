const loginToZerodha = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/zerodha/login`, {
      method: "POST",
    });
    const data = await response.json();
    if (data && data.login_url) {
      window.location.href = data.login_url;
    } else {
      alert("Failed to get login URL.");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Login failed.");
  }
};
window.loginToZerodha = loginToZerodha;
