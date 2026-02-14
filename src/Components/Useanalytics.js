import { useEffect, useState } from 'react';

export function useAnalytics() {
  const [analyticsData, setAnalyticsData] = useState({
    visits: 0,
    lastVisit: null,
    pageViews: 0,
    clicksTracked: [],
    actions: []
  });

  // Initialize analytics on mount
  useEffect(() => {
    // Get existing data or create new
    const savedData = localStorage.getItem('siteAnalytics');
    const data = savedData ? JSON.parse(savedData) : {
      visits: 0,
      lastVisit: null,
      pageViews: 0,
      clicksTracked: [],
      actions: []
    };

    // Increment visits
    data.visits += 1;
    data.lastVisit = new Date().toLocaleString();
    data.pageViews += 1;

    // Add action log
    data.actions.push({
      type: 'page_load',
      timestamp: new Date().toLocaleString(),
      page: window.location.pathname
    });

    setAnalyticsData(data);
    localStorage.setItem('siteAnalytics', JSON.stringify(data));
  }, []);

  // Track button clicks
  const trackClick = (buttonName) => {
    const data = JSON.parse(localStorage.getItem('siteAnalytics')) || analyticsData;
    
    data.clicksTracked.push({
      button: buttonName,
      timestamp: new Date().toLocaleString()
    });

    data.actions.push({
      type: 'button_click',
      button: buttonName,
      timestamp: new Date().toLocaleString()
    });

    setAnalyticsData(data);
    localStorage.setItem('siteAnalytics', JSON.stringify(data));
  };

  // Track tab switches
  const trackTabChange = (tabName) => {
    const data = JSON.parse(localStorage.getItem('siteAnalytics')) || analyticsData;
    
    data.actions.push({
      type: 'tab_change',
      tab: tabName,
      timestamp: new Date().toLocaleString()
    });

    setAnalyticsData(data);
    localStorage.setItem('siteAnalytics', JSON.stringify(data));
  };

  // Track story actions
  const trackStoryAction = (action, storyName) => {
    const data = JSON.parse(localStorage.getItem('siteAnalytics')) || analyticsData;
    
    data.actions.push({
      type: 'story_action',
      action: action,
      story: storyName,
      timestamp: new Date().toLocaleString()
    });

    setAnalyticsData(data);
    localStorage.setItem('siteAnalytics', JSON.stringify(data));
  };

  // Get analytics summary
  const getAnalyticsSummary = () => {
    const data = JSON.parse(localStorage.getItem('siteAnalytics')) || analyticsData;
    return {
      totalVisits: data.visits,
      lastVisit: data.lastVisit,
      pageViews: data.pageViews,
      totalClicks: data.clicksTracked.length,
      totalActions: data.actions.length,
      allActions: data.actions
    };
  };

  return {
    trackClick,
    trackTabChange,
    trackStoryAction,
    getAnalyticsSummary,
    analyticsData
  };
}