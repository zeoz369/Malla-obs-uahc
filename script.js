document.addEventListener('DOMContentLoaded', function() {
    const courses = document.querySelectorAll('.course');
    const resetBtn = document.getElementById('reset-btn');
    const progress = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    const totalCourses = courses.length;
    let completedCourses = 0;

    // Inicializar cursos
    function initializeCourses() {
        completedCourses = 0;
        
        courses.forEach(course => {
            // Verificar estado en localStorage
            const isCompleted = localStorage.getItem(course.dataset.id) === 'completed';
            
            if (isCompleted) {
                course.classList.add('completed');
                completedCourses++;
                
                // Desbloquear cursos dependientes
                const unlocks = course.dataset.unlocks;
                if (unlocks) {
                    unlocks.split(' ').forEach(id => {
                        const unlockedCourse = document.querySelector(`[data-id="${id}"]`);
                        if (unlockedCourse) {
                            unlockedCourse.classList.remove('locked');
                        }
                    });
                }
            }
            
            // Verificar requisitos
            const requires = course.dataset.requires;
            if (requires) {
                const requiredIds = requires.split(' ');
                const allRequiredCompleted = requiredIds.every(id => {
                    const requiredCourse = document.querySelector(`[data-id="${id}"]`);
                    return requiredCourse && requiredCourse.classList.contains('completed');
                });
                
                if (!allRequiredCompleted && !course.classList.contains('completed')) {
                    course.classList.add('locked');
                } else {
                    course.classList.remove('locked');
                }
            }
        });
        
        updateProgress();
    }

    // Actualizar progreso
    function updateProgress() {
        const percentage = Math.round((completedCourses / totalCourses) * 100);
        progress.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}%`;
    }

    // Manejar clic en curso
    function handleCourseClick(e) {
        const course = e.currentTarget;
        
        if (course.classList.contains('locked')) return;
        
        if (course.classList.contains('completed')) {
            // Desmarcar como completado
            course.classList.remove('completed');
            localStorage.removeItem(course.dataset.id);
            completedCourses--;
        } else {
            // Marcar como completado
            course.classList.add('completed');
            localStorage.setItem(course.dataset.id, 'completed');
            completedCourses++;
            
            // Desbloquear cursos dependientes
            const unlocks = course.dataset.unlocks;
            if (unlocks) {
                unlocks.split(' ').forEach(id => {
                    const unlockedCourse = document.querySelector(`[data-id="${id}"]`);
                    if (unlockedCourse) {
                        unlockedCourse.classList.remove('locked');
                    }
                });
            }
        }
        
        // Actualizar estado de cursos dependientes
        courses.forEach(c => {
            const requires = c.dataset.requires;
            if (requires) {
                const requiredIds = requires.split(' ');
                const allRequiredCompleted = requiredIds.every(id => {
                    const requiredCourse = document.querySelector(`[data-id="${id}"]`);
                    return requiredCourse && requiredCourse.classList.contains('completed');
                });
                
                if (!allRequiredCompleted && !c.classList.contains('completed')) {
                    c.classList.add('locked');
                } else {
                    c.classList.remove('locked');
                }
            }
        });
        
        updateProgress();
    }

    // Reiniciar malla
    function resetMalla() {
        if (confirm('¿Estás seguro de que quieres reiniciar toda la malla? Se borrarán todos tus avances.')) {
            courses.forEach(course => {
                course.classList.remove('completed');
                localStorage.removeItem(course.dataset.id);
            });
            initializeCourses();
        }
    }

    // Event listeners
    courses.forEach(course => {
        course.addEventListener('click', handleCourseClick);
    });
    
    resetBtn.addEventListener('click', resetMalla);

    // Inicializar
    initializeCourses();
});
