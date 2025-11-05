// API Service for ITRI Startup Platform
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// 市場策略 API
export const marketStrategyAPI = {
  getAll: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/market-strategies?${queryString}`);
      if (!response.ok) throw new Error('Failed to fetch market strategies');
      return await response.json();
    } catch (error) {
      console.error('Error fetching market strategies:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/market-strategies/${id}`);
      if (!response.ok) throw new Error('Failed to fetch market strategy');
      return await response.json();
    } catch (error) {
      console.error('Error fetching market strategy:', error);
      throw error;
    }
  },

  create: async (data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/market-strategies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create market strategy');
      return await response.json();
    } catch (error) {
      console.error('Error creating market strategy:', error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/market-strategies/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update market strategy');
      return await response.json();
    } catch (error) {
      console.error('Error updating market strategy:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/market-strategies/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete market strategy');
      return await response.json();
    } catch (error) {
      console.error('Error deleting market strategy:', error);
      throw error;
    }
  }
};

// 訂單合作 API
export const orderCooperationAPI = {
  getAll: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/order-cooperations?${queryString}`);
      if (!response.ok) throw new Error('Failed to fetch order cooperations');
      return await response.json();
    } catch (error) {
      console.error('Error fetching order cooperations:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/order-cooperations/${id}`);
      if (!response.ok) throw new Error('Failed to fetch order cooperation');
      return await response.json();
    } catch (error) {
      console.error('Error fetching order cooperation:', error);
      throw error;
    }
  },

  create: async (data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/order-cooperations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create order cooperation');
      return await response.json();
    } catch (error) {
      console.error('Error creating order cooperation:', error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/order-cooperations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update order cooperation');
      return await response.json();
    } catch (error) {
      console.error('Error updating order cooperation:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/order-cooperations/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete order cooperation');
      return await response.json();
    } catch (error) {
      console.error('Error deleting order cooperation:', error);
      throw error;
    }
  }
};

// 資源補助 API
export const fundingSupportAPI = {
  getAll: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/funding-support?${queryString}`);
      if (!response.ok) throw new Error('Failed to fetch funding support');
      return await response.json();
    } catch (error) {
      console.error('Error fetching funding support:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/funding-support/${id}`);
      if (!response.ok) throw new Error('Failed to fetch funding support');
      return await response.json();
    } catch (error) {
      console.error('Error fetching funding support:', error);
      throw error;
    }
  },

  create: async (data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/funding-support`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create funding support');
      return await response.json();
    } catch (error) {
      console.error('Error creating funding support:', error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/funding-support/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update funding support');
      return await response.json();
    } catch (error) {
      console.error('Error updating funding support:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/funding-support/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete funding support');
      return await response.json();
    } catch (error) {
      console.error('Error deleting funding support:', error);
      throw error;
    }
  }
};

// 專家人才 API (預留)
export const expertTalentAPI = {
  getAll: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/expert-talent?${queryString}`);
      if (!response.ok) throw new Error('Failed to fetch expert talent');
      return await response.json();
    } catch (error) {
      console.error('Error fetching expert talent:', error);
      throw error;
    }
  }
};

// 資源支援 API (預留)
export const resourceSupportAPI = {
  getAll: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${API_BASE_URL}/resource-support?${queryString}`);
      if (!response.ok) throw new Error('Failed to fetch resource support');
      return await response.json();
    } catch (error) {
      console.error('Error fetching resource support:', error);
      throw error;
    }
  }
};

// Health Check
export const healthCheck = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error('API health check failed');
    return await response.json();
  } catch (error) {
    console.error('API health check error:', error);
    throw error;
  }
};

export default {
  marketStrategyAPI,
  orderCooperationAPI,
  fundingSupportAPI,
  expertTalentAPI,
  resourceSupportAPI,
  healthCheck
};
