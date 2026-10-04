// Sunwai - Public Health Accountability Prototype
// JavaScript for screen interactions

document.addEventListener('DOMContentLoaded', function() {
  
  // Navigation between screens
  const navLinks = document.querySelectorAll('.header-nav a');
  const screens = document.querySelectorAll('.screen');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      
      // Update navigation
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Show target screen, hide others
      screens.forEach(screen => {
        screen.classList.remove('active');
        if (screen.id === targetId) {
          screen.classList.add('active');
        }
      });
    });
  });

  // Feature: Report Issue - Category selection
  const issueCards = document.querySelectorAll('.issue-card');
  const medicineSelect = document.getElementById('medicine-select');
  const submitReport = document.querySelector('.submit-report');
  const confirmCheckbox = document.getElementById('confirm');
  
  issueCards.forEach(card => {
    card.addEventListener('click', function() {
      // Remove checked from all cards
      issueCards.forEach(c => c.classList.remove('selected'));
      // Add checked to clicked card
      this.classList.add('selected');
      
      // Show medicine selection if medicine category is selected
      if (this.querySelector('input').value === 'medicine') {
        medicineSelect.style.display = 'block';
      } else {
        medicineSelect.style.display = 'none';
      }
    });
  });

  // Initialize: set first card as selected if no selection
  document.querySelector('.issue-card')?.classList.add('selected');
  medicineSelect.style.display = 'none';

  // Submit Report
  submitReport.addEventListener('click', function() {
    const selectedCard = document.querySelector('.issue-card.selected');
    if (!selectedCard) {
      alert('Please select an issue type');
      return;
    }
    
    const issueType = selectedCard.querySelector('input').value;
    let medicine = '';
    
    if (issueType === 'medicine') {
      medicine = document.querySelector('.medicine-select select')?.value || '';
      if (!medicine) {
        alert('Please select a medicine');
        return;
      }
    }
    
    if (!confirmCheckbox.checked) {
      alert('Please confirm that you personally experienced this issue');
      return;
    }
    
    // Simulate ZK proof generation
    showZKScreen();
  });

  // Show ZK Proof Screen
  function showZKScreen() {
    hideAllScreens();
    const zkScreen = document.getElementById('zk-proof');
    zkScreen.classList.add('active');
    
    // Animate progress bars setTimeout(() => {
    simulateZKSubmission();
    }, 1000);
  }

  // Simulate ZK proof and move to threshold
  function simulateZKSubmission() {
    // Update ZK results
    const reportId = document.querySelector('.report-id span');
    if (reportId) {
      reportId.textContent = '#SW-' + Math.floor(1000 + Math.random() * 9000);
    }
    
    // Move to threshold screen setTimeout(() => {
    showThresholdScreen();
    }, 2000);
  }

  // Show Community Threshold Screen
  function showThresholdScreen() {
    hideAllScreens();
    const thresholdScreen = document.getElementById('threshold');
    thresholdScreen.classList.add('active');
    
    // Start animation - after some time, trigger case creation setTimeout(() => {
    createCase();
    }, 1500);
  }

  // Create case when threshold reached
  function createCase() {
    // In a real prototype, this would check if we have enough reports
    // For demo, we'll just show the case created screen
    hideAllScreens();
    const caseScreen = document.getElementById('case-created');
    caseScreen.classList.add('active');
    
    // After delay, show public dashboard setTimeout(() => {
    showPublicDashboard();
    }, 2000);
  }

  // Show Public Case Dashboard
  function showPublicDashboard() {
    hideAllScreens();
    const dashboardScreen = document.getElementById('public-dashboard');
    dashboardScreen.classList.add('active');
    
    // Animate counter numbers
    animateCounters();
  }

  // Animate counter numbers
  function animateCounters() {
    const counterNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    counterNumbers.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      let current = 0;
      const increment = target / 100;
      const duration = 2000;
      const stepTime = duration / 100;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + (target === 127 ? '+ targets' : '');
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  }

  // Show Official Response Screen
  function showOfficialScreen() {
    hideAllScreens();
    const officialScreen = document.getElementById('official-response');
    officialScreen.classList.add('active');
  }

  // Submit official response
  const submitOfficial = document.querySelector('.submit-official');
  submitOfficial.addEventListener('click', function() {
    const responseText = document.querySelector('.official-response').value;
    if (!responseText.trim()) {
      alert('Please enter your official response');
      return;
    }
    
    // Show response recorded
    const responseRecorded = document.querySelector('.response-recorded');
    responseRecorded.style.display = 'block';
    
    // Move to resident verification setTimeout(() => {
    showResidentVerification();
    }, 1500);
  });

  // Show Resident Verification Screen
  function showResidentVerification() {
    hideAllScreens();
    const residentScreen = document.getElementById('resident-verify');
    residentScreen.classList.add('active');
  }

  // Resident verification - resolve or not
  const verificationOptions = document.querySelectorAll('.resident-verify .option');
  
  verificationOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remove selected from all
      verificationOptions.forEach(o => o.classList.remove('selected'));
      // Add selected to clicked
      this.classList.add('selected');
    });
  });

  // Show Resolved or Escalated screen
  function proceedAfterVerification() {
    const selected = document.querySelector('.resident-verify .option.selected');
    
    hideAllScreens();
    
    if (selected && selected.classList.contains('yes')) {
      showResolvedScreen();
    } else {
      showEscalationScreen();
    }
  }

  // Show Resolved Screen
  function showResolvedScreen() {
    const resolvedScreen = document.getElementById('resolved');
    resolvedScreen.classList.add('active');
  }

  // Show Escalation Screen
  function showEscalationScreen() {
    const escalationScreen = document.getElementById('escalation');
    escalationScreen.classList.add('active');
  }

  // Hide all screens
  function hideAllScreens() {
    screens.forEach(screen => screen.classList.remove('active'));
  }

  // Initialize: first screen is home
  hideAllScreens();
  document.querySelector('.home-screen')?.classList.add('active');

});