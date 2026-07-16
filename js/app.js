document.addEventListener('DOMContentLoaded', () => {
  const views = document.querySelectorAll('.view');
  const navItems = document.querySelectorAll('.nav-item');
  const dashCards = document.querySelectorAll('.dash-card[data-target]');
  const backBtns = document.querySelectorAll('.top-bar__back');
  const registerBtn = document.getElementById('btnRegisterProduct');
  const exploreBtn = document.getElementById('btnExploreAcademy');
  const regForm = document.getElementById('regForm');
  
  // --- QR CODE URL PARAMETER LOGIC ---
  const urlParams = new URLSearchParams(window.location.search);
  const productType = urlParams.get('type') || 'steel'; // Default to steel if none provided

  if (productType === 'wooden') {
    // Hide warranty dashboard card
    const warrantyCard = document.getElementById('dashCardWarranty');
    if (warrantyCard) warrantyCard.style.display = 'none';
    
    // Change Registration Title
    const regTitle = document.getElementById('regTitle');
    if (regTitle) regTitle.textContent = "Register Your Wooden Board";
  } else {
    // Steel Board (includes warranty)
    const regTitle = document.getElementById('regTitle');
    if (regTitle) regTitle.textContent = "Activate Your 6-Month Warranty";
  }
  
  // Navigation function
  function navigateTo(viewId) {
    views.forEach(view => view.classList.remove('active'));
    const targetView = document.getElementById(viewId);
    if (targetView) targetView.classList.add('active');
    
    // Only update bottom nav if it's one of the main tabs
    const mainTabs = ['viewHome', 'viewAcademy', 'viewRecipes', 'viewChallenge', 'viewDashboard'];
    if (mainTabs.includes(viewId)) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.target === viewId || (viewId === 'viewDashboard' && item.dataset.target === 'viewHome')) {
          item.classList.add('active');
        }
      });
    }
    window.scrollTo(0, 0);
  }

  // Make navigateTo available globally for inline onclick handlers
  window.navigateTo = navigateTo;

  // Listeners
  navItems.forEach(item => item.addEventListener('click', (e) => { e.preventDefault(); navigateTo(item.dataset.target); }));
  dashCards.forEach(card => card.addEventListener('click', () => navigateTo(card.dataset.target)));
  backBtns.forEach(btn => btn.addEventListener('click', () => navigateTo(btn.dataset.target || 'viewDashboard')));
  if (registerBtn) registerBtn.addEventListener('click', () => navigateTo('viewRegister'));
  if (exploreBtn) exploreBtn.addEventListener('click', () => navigateTo('viewDashboard'));

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('🎉 Welcome to the Homixo Family! Your warranty is activated.');
      navigateTo('viewDashboard');
    });
  }

  // --- INGREDIENT RENDERING ---
  const ingredientContainer = document.getElementById('ingredientContainer');
  const searchInput = document.getElementById('ingredientSearch');
  const noResults = document.getElementById('ingredientNoResults');
  
  const renderIngredients = (filterTerm = "") => {
    if (!ingredientContainer) return;
    ingredientContainer.innerHTML = ''; // clear
    let matchCount = 0;
    
    ingredientsData.forEach(ing => {
      if (ing.name.toLowerCase().includes(filterTerm) || ing.category.toLowerCase().includes(filterTerm)) {
        matchCount++;
        
        let tipsHtml = ing.tips.map(tip => `<li>${tip}</li>`).join('');
        
        const cardHtml = `
          <div class="ingredient-card reveal-scale">
            <div class="ingredient-header">
              <div class="ingredient-emoji">${ing.emoji}</div>
              <div>
                <h3>${ing.name}</h3>
                <span style="font-size: 12px; color: var(--clr-gray-500); background: var(--clr-gray-100); padding: 2px 8px; border-radius: 10px;">${ing.category}</span>
              </div>
            </div>
            <ul class="ingredient-tips">
              ${tipsHtml}
            </ul>
          </div>
        `;
        ingredientContainer.innerHTML += cardHtml;
      }
    });
    
    if (matchCount === 0) {
      noResults.classList.remove('d-none');
    } else {
      noResults.classList.add('d-none');
    }
  };
  
  if (typeof ingredientsData !== 'undefined') {
    renderIngredients(); // Initial render
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderIngredients(e.target.value.toLowerCase());
    });
  }

  // --- RECIPE RENDERING ---
  const recipeContainer = document.getElementById('recipeContainer');
  const categoryBtns = document.querySelectorAll('#recipeCategories .btn');
  const images = [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
  ];
  
  // Attach images to recipe data for consistency when viewing details
  if (typeof recipesData !== 'undefined') {
    recipesData.forEach((recipe, index) => {
      recipe.image = images[index % images.length];
    });
  }
  
  const renderRecipes = (filterCategory = "All") => {
    if (!recipeContainer) return;
    recipeContainer.innerHTML = '';
    
    recipesData.forEach((recipe, index) => {
      if (filterCategory === "All" || recipe.cat === filterCategory) {
        const cardHtml = `
          <div class="lesson-card reveal-scale" style="transition-delay: ${(index % 5) * 50}ms;">
            <div class="lesson-card__img" style="background: url('${recipe.image}') center/cover;"></div>
            <div class="lesson-card__body">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="challenge-badge" style="margin: 0;">${recipe.cat}</span>
                <span style="font-size: 12px; font-weight: 500;">⏱️ ${recipe.totalTime}</span>
              </div>
              <h3 class="lesson-card__title" style="margin-bottom: 8px;">${recipe.name}</h3>
              <p style="font-size: 14px; color: var(--clr-gray-500); margin-bottom: 16px;">${recipe.desc}</p>
              <button class="btn btn-outline" style="padding: 10px;" onclick="window.openRecipeDetail('${recipe.id}')">View Recipe</button>
            </div>
          </div>
        `;
        recipeContainer.innerHTML += cardHtml;
      }
    });
  };
  
  if (typeof recipesData !== 'undefined') {
    renderRecipes(); // Initial render
  }
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // update active state
      categoryBtns.forEach(b => {
        b.style.background = 'transparent';
        b.style.color = 'var(--clr-charcoal)';
      });
      btn.style.background = 'var(--clr-charcoal)';
      btn.style.color = 'white';
      
      const cat = btn.dataset.cat;
      renderRecipes(cat);
    });
  });

  // --- OPEN RECIPE DETAIL ---
  window.openRecipeDetail = (id) => {
    const recipe = recipesData.find(r => r.id === id);
    if (!recipe) return;

    // Populate data
    document.getElementById('rd-hero').style.background = `url('${recipe.image}') center/cover`;
    document.getElementById('rd-badges').innerHTML = `<span class="challenge-badge">${recipe.cat}</span>`;
    document.getElementById('rd-title').textContent = recipe.name;
    document.getElementById('rd-desc').textContent = recipe.desc;
    document.getElementById('rd-prep').textContent = recipe.prepTime;
    document.getElementById('rd-cook').textContent = recipe.cookTime;
    document.getElementById('rd-serve').textContent = recipe.servings;
    document.getElementById('rd-cal').textContent = recipe.calories;

    const ingList = document.getElementById('rd-ingredients');
    ingList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

    const instList = document.getElementById('rd-instructions');
    instList.innerHTML = recipe.instructions.map((inst, idx) => `
      <div style="background: var(--clr-gray-100); padding: 12px 16px; border-radius: var(--radius-md); font-size: 14px; line-height: 1.6;">
        <strong style="color: var(--clr-orange); display: block; margin-bottom: 4px;">Step ${idx + 1}</strong>
        ${inst}
      </div>
    `).join('');

    // Navigate to the view
    navigateTo('viewRecipeDetail');
  };

  // Challenge Completion
  const btnCompleteChallenge = document.getElementById('btnCompleteChallenge');
  if (btnCompleteChallenge) {
    btnCompleteChallenge.addEventListener('click', () => {
      btnCompleteChallenge.textContent = 'Completed ✅';
      btnCompleteChallenge.style.background = '#4caf50';
      btnCompleteChallenge.style.boxShadow = 'none';
      const pbar = document.querySelector('.progress-bar');
      if (pbar) pbar.style.width = '10%'; // Simulate progress
    });
  }
});
