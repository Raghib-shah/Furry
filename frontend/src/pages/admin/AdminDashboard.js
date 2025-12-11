import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../config/api';
import AnimatedSection from '../../components/AnimatedSection';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchData();
  }, [navigate, activeTab, statusFilter]);

  const fetchData = async () => {
    setLoading(true);
    const token = localStorage.getItem('adminToken');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      if (activeTab === 'inquiries') {
        const response = await axios.get(`${API_BASE_URL}/api/admin/inquiries`, {
          headers,
          params: { search, status: statusFilter || undefined }
        });
        setInquiries(response.data.inquiries);
      } else {
        const response = await axios.get(`${API_BASE_URL}/api/admin/payments`, {
          headers,
          params: { search, status: statusFilter || undefined }
        });
        setPayments(response.data.payments);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const downloadReceipt = async (paymentId) => {
    const token = localStorage.getItem('adminToken');
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/payment/${paymentId}/receipt`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `receipt-${paymentId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert('Error downloading receipt');
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-surface border border-borderSoft hover:border-primary text-textMain font-bold rounded-full px-6 py-3 transition-colors"
            >
              Logout
            </button>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'inquiries'
                  ? 'bg-primary text-textMain'
                  : 'bg-surface border border-borderSoft text-textMuted hover:border-primary'
              }`}
            >
              Inquiries
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'payments'
                  ? 'bg-primary text-textMain'
                  : 'bg-surface border border-borderSoft text-textMuted hover:border-primary'
              }`}
            >
              Payments
            </button>
          </div>
        </AnimatedSection>

        {/* Search and Filters */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && fetchData()}
              className="flex-1 bg-surface border border-borderSoft rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-surface border border-borderSoft rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary"
            >
              <option value="">All Status</option>
              {activeTab === 'inquiries' ? (
                <>
                  <option value="new">New</option>
                  <option value="paid">Paid</option>
                </>
              ) : (
                <>
                  <option value="PENDING">Pending</option>
                  <option value="PAID">Paid</option>
                  <option value="FAILED">Failed</option>
                </>
              )}
            </select>
            <button
              onClick={fetchData}
              className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-6 py-3 transition-colors"
            >
              Search
            </button>
          </div>
        </AnimatedSection>

        {/* Statistics */}
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-surface border border-borderSoft rounded-2xl p-6">
              <h3 className="text-textMuted mb-2">Total Inquiries</h3>
              <p className="text-3xl font-bold">{inquiries.length}</p>
            </div>
            <div className="bg-surface border border-borderSoft rounded-2xl p-6">
              <h3 className="text-textMuted mb-2">Total Payments</h3>
              <p className="text-3xl font-bold">{payments.length}</p>
            </div>
            <div className="bg-surface border border-borderSoft rounded-2xl p-6">
              <h3 className="text-textMuted mb-2">Paid Commissions</h3>
              <p className="text-3xl font-bold">{payments.filter(p => p.status === 'PAID').length}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Table */}
        <AnimatedSection>
          <div className="bg-surface border border-borderSoft rounded-2xl overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-textMuted">Loading...</div>
            ) : activeTab === 'inquiries' ? (
              <table className="w-full">
                <thead className="bg-bgMain border-b border-borderSoft">
                  <tr>
                    <th className="px-6 py-4 text-left">Name</th>
                    <th className="px-6 py-4 text-left">Sona Name</th>
                    <th className="px-6 py-4 text-left">Email</th>
                    <th className="px-6 py-4 text-left">Discord</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry._id} className="border-b border-borderSoft hover:bg-bgMain/50">
                      <td className="px-6 py-4">{inquiry.name}</td>
                      <td className="px-6 py-4">{inquiry.sonaName}</td>
                      <td className="px-6 py-4">{inquiry.email}</td>
                      <td className="px-6 py-4">{inquiry.discord}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          inquiry.status === 'paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {inquiry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-textMuted">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full">
                <thead className="bg-bgMain border-b border-borderSoft">
                  <tr>
                    <th className="px-6 py-4 text-left">Payment ID</th>
                    <th className="px-6 py-4 text-left">Name</th>
                    <th className="px-6 py-4 text-left">Sona Name</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Date</th>
                    <th className="px-6 py-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment._id} className="border-b border-borderSoft hover:bg-bgMain/50">
                      <td className="px-6 py-4">{payment.paymentId}</td>
                      <td className="px-6 py-4">{payment.inquiryId?.name || 'N/A'}</td>
                      <td className="px-6 py-4">{payment.inquiryId?.sonaName || 'N/A'}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          payment.status === 'PAID' ? 'bg-green-500/20 text-green-400' :
                          payment.status === 'FAILED' ? 'bg-red-500/20 text-red-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-textMuted">
                        {new Date(payment.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        {payment.receiptFilePath && (
                          <button
                            onClick={() => downloadReceipt(payment._id)}
                            className="text-primary hover:text-primarySoft"
                          >
                            Download Receipt
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AdminDashboard;

