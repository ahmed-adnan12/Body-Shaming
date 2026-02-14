import React, { useState, useEffect } from 'react';

export function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState({
    totalVisits: 0,
    lastVisit: null,
    pageViews: 0,
    totalClicks: 0,
    totalActions: 0,
    allActions: []
  });

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Load analytics from localStorage
    const data = JSON.parse(localStorage.getItem('siteAnalytics'));
    if (data) {
      setAnalytics({
        totalVisits: data.visits,
        lastVisit: data.lastVisit,
        pageViews: data.pageViews,
        totalClicks: data.clicksTracked?.length || 0,
        totalActions: data.actions?.length || 0,
        allActions: data.actions || []
      });
    }
  }, []);

  const clearAnalytics = () => {
    if (window.confirm('Are you sure? This will delete all analytics data.')) {
      localStorage.removeItem('siteAnalytics');
      setAnalytics({
        totalVisits: 0,
        lastVisit: null,
        pageViews: 0,
        totalClicks: 0,
        totalActions: 0,
        allActions: []
      });
    }
  };

  const downloadAnalytics = () => {
    const data = JSON.parse(localStorage.getItem('siteAnalytics'));
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'analytics.json';
    link.click();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-purple-700 transition-all"
      >
        📊 Analytics
      </button>

      {showDetails && (
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white rounded-2xl p-6 w-80 shadow-2xl border border-purple-500/30 max-h-96 overflow-y-auto">
          <h3 className="text-xl font-bold mb-4 text-purple-300">Site Analytics</h3>

          <div className="space-y-3 mb-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <p className="text-sm text-gray-400">Total Visits</p>
              <p className="text-2xl font-bold text-purple-300">{analytics.totalVisits}</p>
            </div>

            <div className="bg-pink-500/20 p-3 rounded-lg">
              <p className="text-sm text-gray-400">Last Visit</p>
              <p className="text-sm text-pink-300">{analytics.lastVisit || 'Never'}</p>
            </div>

            <div className="bg-blue-500/20 p-3 rounded-lg">
              <p className="text-sm text-gray-400">Page Views</p>
              <p className="text-2xl font-bold text-blue-300">{analytics.pageViews}</p>
            </div>

            <div className="bg-cyan-500/20 p-3 rounded-lg">
              <p className="text-sm text-gray-400">Total Actions</p>
              <p className="text-2xl font-bold text-cyan-300">{analytics.totalActions}</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-4 mb-4">
            <p className="text-sm font-bold text-gray-400 mb-2">Recent Actions:</p>
            <div className="space-y-1 max-h-32 overflow-y-auto text-xs">
              {analytics.allActions.slice(-5).reverse().map((action, idx) => (
                <div key={idx} className="text-gray-300 bg-white/5 p-2 rounded">
                  <p className="font-semibold text-purple-300">{action.type}</p>
                  <p className="text-gray-400">{action.button || action.tab || action.action || ''}</p>
                  <p className="text-xs text-gray-500">{action.timestamp}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={downloadAnalytics}
              className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all"
            >
              📥 Download
            </button>
            <button
              onClick={clearAnalytics}
              className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all"
            >
              🗑️ Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnalyticsDashboard;
