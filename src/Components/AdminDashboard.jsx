import React, { useState, useEffect } from 'react';

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [analytics, setAnalytics] = useState({
    totalVisits: 0,
    lastVisit: null,
    pageViews: 0,
    clicksTracked: [],
    actions: [],
    stories: []
  });

  const ADMIN_PASSWORD = 'bodypositivity123'; // Change this to your password!

  // Load analytics when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadAnalytics();
    }
  }, [isAuthenticated]);

  const loadAnalytics = () => {
    const analyticsData = JSON.parse(localStorage.getItem('siteAnalytics')) || {};
    const storiesData = JSON.parse(localStorage.getItem('bodyPositivityStories')) || [];
    
    setAnalytics({
      totalVisits: analyticsData.visits || 0,
      lastVisit: analyticsData.lastVisit || null,
      pageViews: analyticsData.pageViews || 0,
      clicksTracked: analyticsData.clicksTracked || [],
      actions: analyticsData.actions || [],
      stories: storiesData
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('❌ Wrong password!');
      setPassword('');
    }
  };

  const downloadFullReport = () => {
    const report = {
      generatedAt: new Date().toLocaleString(),
      analytics: {
        totalVisits: analytics.totalVisits,
        lastVisit: analytics.lastVisit,
        pageViews: analytics.pageViews,
        totalActions: analytics.actions.length,
        totalClicks: analytics.clicksTracked.length,
        allActions: analytics.actions,
        allClicks: analytics.clicksTracked
      },
      stories: {
        total: analytics.stories.length,
        stories: analytics.stories
      }
    };

    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics-report-${new Date().getTime()}.json`;
    link.click();
  };

  const getActionStats = () => {
    const stats = {};
    analytics.actions.forEach(action => {
      stats[action.type] = (stats[action.type] || 0) + 1;
    });
    return stats;
  };

  const getTopButtons = () => {
    const buttonClicks = {};
    analytics.clicksTracked.forEach(click => {
      buttonClicks[click.button] = (buttonClicks[click.button] || 0) + 1;
    });
    return Object.entries(buttonClicks)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  };

  const getTabStats = () => {
    const tabs = {};
    analytics.actions.forEach(action => {
      if (action.type === 'tab_change') {
        tabs[action.tab] = (tabs[action.tab] || 0) + 1;
      }
    });
    return tabs;
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔐</div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-purple-200">Enter password to view analytics</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Default password: bodypositivity123
            <br />
            (Change it in the code!)
          </p>
        </div>
      </div>
    );
  }

  // Dashboard Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">📊 Admin Dashboard</h1>
            <p className="text-purple-200">Complete analytics overview</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all font-bold"
          >
            Logout
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <p className="text-purple-300 text-sm mb-2">Total Visits</p>
            <p className="text-4xl font-bold text-purple-200">{analytics.totalVisits}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <p className="text-pink-300 text-sm mb-2">Page Views</p>
            <p className="text-4xl font-bold text-pink-200">{analytics.pageViews}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <p className="text-blue-300 text-sm mb-2">Total Actions</p>
            <p className="text-4xl font-bold text-blue-200">{analytics.actions.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <p className="text-cyan-300 text-sm mb-2">Stories Posted</p>
            <p className="text-4xl font-bold text-cyan-200">{analytics.stories.length}</p>
          </div>
        </div>

        {/* Last Visit */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
          <p className="text-white font-bold mb-2">📅 Last Visitor</p>
          <p className="text-2xl text-purple-300">{analytics.lastVisit || 'No visits yet'}</p>
        </div>

        {/* Top Buttons and Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Top Buttons */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">🔘 Most Clicked Buttons</h3>
            <div className="space-y-2">
              {getTopButtons().length > 0 ? (
                getTopButtons().map(([button, count], idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-300">{button}</span>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full font-bold">{count}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No clicks yet</p>
              )}
            </div>
          </div>

          {/* Tab Stats */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">📑 Tab Views</h3>
            <div className="space-y-2">
              {Object.entries(getTabStats()).length > 0 ? (
                Object.entries(getTabStats()).map(([tab, count], idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-300">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                    <span className="bg-pink-600 text-white px-3 py-1 rounded-full font-bold">{count}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No tab views yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Types */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">📊 Action Breakdown</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(getActionStats()).map(([type, count], idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-lg text-center">
                <p className="text-gray-400 text-sm capitalize">{type.replace('_', ' ')}</p>
                <p className="text-2xl font-bold text-cyan-300">{count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Actions */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">⏰ Recent Actions (Last 20)</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {analytics.actions.slice(-20).reverse().map((action, idx) => (
              <div key={idx} className="bg-white/5 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-purple-300 capitalize">{action.type.replace('_', ' ')}</p>
                    <p className="text-sm text-gray-400">
                      {action.button || action.tab || action.action || action.page || 'Action'}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">{action.timestamp}</p>
                </div>
              </div>
            ))}
            {analytics.actions.length === 0 && (
              <p className="text-gray-400">No actions yet</p>
            )}
          </div>
        </div>

        {/* Stories Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">📖 All Stories Posted</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {analytics.stories.length > 0 ? (
              analytics.stories.map((story, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-white">{story.name}</p>
                      <p className="text-xs text-gray-400">{story.date}</p>
                    </div>
                    <p className="text-sm text-pink-300">❤️ {story.likes} likes</p>
                  </div>
                  <p className="text-gray-300 text-sm">{story.text}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No stories yet</p>
            )}
          </div>
        </div>

        {/* Download Report */}
        <div className="flex gap-4">
          <button
            onClick={downloadFullReport}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all"
          >
            📥 Download Full Report
          </button>
          <button
            onClick={() => {
              loadAnalytics();
              alert('✅ Data refreshed!');
            }}
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all"
          >
            🔄 Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
