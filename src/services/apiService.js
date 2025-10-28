// API 基礎配置
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// 統一的 fetch 封裝
async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Market Strategies API
export const marketStrategyAPI = {
  // 獲取所有策略
  getAll: async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.industry) params.append('industry', filters.industry);
    if (filters.status) params.append('status', filters.status);
    
    const endpoint = `/market-strategies${params.toString() ? '?' + params.toString() : ''}`;
    return apiFetch(endpoint);
  },
  
  // 獲取單一策略
  getById: async (id) => {
    return apiFetch(`/market-strategies/${id}`);
  },
  
  // 新增策略
  create: async (data) => {
    return apiFetch('/market-strategies', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  // 更新狀態
  updateStatus: async (id, status) => {
    return apiFetch(`/market-strategies/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },
  
  // 刪除策略
  delete: async (id) => {
    return apiFetch(`/market-strategies/${id}`, {
      method: 'DELETE',
    });
  },
};

// Order Cooperations API
export const orderCooperationAPI = {
  // 獲取所有訂單
  getAll: async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.industry) params.append('industry', filters.industry);
    if (filters.status) params.append('status', filters.status);
    
    const endpoint = `/order-cooperations${params.toString() ? '?' + params.toString() : ''}`;
    return apiFetch(endpoint);
  },
  
  // 獲取單一訂單
  getById: async (id) => {
    return apiFetch(`/order-cooperations/${id}`);
  },
  
  // 新增訂單
  create: async (data) => {
    return apiFetch('/order-cooperations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  // 更新狀態
  updateStatus: async (id, status) => {
    return apiFetch(`/order-cooperations/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },
  
  // 刪除訂單
  delete: async (id) => {
    return apiFetch(`/order-cooperations/${id}`, {
      method: 'DELETE',
    });
  },
};

// Health Check
export const healthCheck = async () => {
  try {
    return await apiFetch('/health');
  } catch (error) {
    console.error('Health check failed:', error);
    return { success: false, message: 'Server is not responding' };
  }
};

export default {
  marketStrategyAPI,
  orderCooperationAPI,
  healthCheck,
};
