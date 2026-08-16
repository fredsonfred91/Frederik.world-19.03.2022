(function () {
  function initAiTransformationBlocks() {
    document.querySelectorAll('.ai-transformation-block').forEach(function (block) {
      var toggle = block.querySelector('.faq');

      if (!toggle) {
        return;
      }

      toggle.setAttribute('role', 'button');
      toggle.setAttribute('tabindex', '0');
      toggle.setAttribute('aria-expanded', 'false');

      function toggleBlock(event) {
        event.preventDefault();
        event.stopPropagation();

        var isOpen = !block.classList.contains('is-open');
        block.classList.toggle('is-open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
      }

      toggle.addEventListener('click', toggleBlock, true);
      toggle.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          toggleBlock(event);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAiTransformationBlocks);
  } else {
    initAiTransformationBlocks();
  }
})();
