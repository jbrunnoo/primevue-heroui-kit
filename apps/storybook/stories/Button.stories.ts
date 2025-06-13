import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '@primeui/vue';
import { ref } from 'vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    isIconOnly: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Primary Button</Button>',
  }),
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Secondary Button</Button>',
  }),
};

export const Success: Story = {
  args: {
    color: 'success',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Success Button</Button>',
  }),
};

export const Warning: Story = {
  args: {
    color: 'warning',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Warning Button</Button>',
  }),
};

export const Danger: Story = {
  args: {
    color: 'danger',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Danger Button</Button>',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="solid">Solid</Button>
        <Button variant="bordered">Bordered</Button>
        <Button variant="light">Light</Button>
        <Button variant="flat">Flat</Button>
        <Button variant="faded">Faded</Button>
        <Button variant="shadow">Shadow</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Loading...</Button>',
  }),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Disabled Button</Button>',
  }),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Full Width Button</Button>',
  }),
};

export const Radius: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button radius="none">None</Button>
        <Button radius="sm">Small</Button>
        <Button radius="md">Medium</Button>
        <Button radius="lg">Large</Button>
        <Button radius="full">Full</Button>
      </div>
    `,
  }),
};

export const FormSubmit: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const formData = ref({ name: '', email: '' });
      const isSubmitting = ref(false);
      const submitMessage = ref('');

      const handleSubmit = async () => {
        isSubmitting.value = true;
        submitMessage.value = '';
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        submitMessage.value = `Formulário enviado! Nome: ${formData.value.name}, Email: ${formData.value.email}`;
        isSubmitting.value = false;
      };

      return { formData, isSubmitting, submitMessage, handleSubmit };
    },
    template: `
      <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-4">Formulário de Contato</h3>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Nome:</label>
            <input 
              v-model="formData.name" 
              type="text" 
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Email:</label>
            <input 
              v-model="formData.email" 
              type="email" 
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seu@email.com"
            />
          </div>
          <Button 
            type="submit"
            color="primary" 
            :isLoading="isSubmitting"
            :isDisabled="!formData.name || !formData.email"
            fullWidth
          >
            {{ isSubmitting ? 'Enviando...' : 'Enviar Formulário' }}
          </Button>
        </form>
        <div v-if="submitMessage" class="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          {{ submitMessage }}
        </div>
      </div>
    `,
  }),
};

export const RouteNavigation: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const currentRoute = ref('/home');
      const navigationHistory = ref(['/home']);

      const navigateTo = (route: string) => {
        currentRoute.value = route;
        navigationHistory.value.push(route);
      };

      const goBack = () => {
        if (navigationHistory.value.length > 1) {
          navigationHistory.value.pop();
          currentRoute.value = navigationHistory.value[navigationHistory.value.length - 1];
        }
      };

      return { currentRoute, navigationHistory, navigateTo, goBack };
    },
    template: `
      <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <div class="mb-4">
          <h3 class="text-lg font-semibold">Navegação de Rotas</h3>
          <p class="text-sm text-gray-600">Rota atual: <code class="bg-gray-100 px-2 py-1 rounded">{{ currentRoute }}</code></p>
        </div>
        
        <div class="grid grid-cols-2 gap-3 mb-4">
          <Button 
            variant="bordered" 
            color="primary"
            @click="navigateTo('/home')"
            :class="{ 'ring-2 ring-blue-500': currentRoute === '/home' }"
          >
            🏠 Home
          </Button>
          <Button 
            variant="bordered" 
            color="secondary"
            @click="navigateTo('/profile')"
            :class="{ 'ring-2 ring-purple-500': currentRoute === '/profile' }"
          >
            👤 Perfil
          </Button>
          <Button 
            variant="bordered" 
            color="success"
            @click="navigateTo('/settings')"
            :class="{ 'ring-2 ring-green-500': currentRoute === '/settings' }"
          >
            ⚙️ Configurações
          </Button>
          <Button 
            variant="bordered" 
            color="warning"
            @click="navigateTo('/help')"
            :class="{ 'ring-2 ring-orange-500': currentRoute === '/help' }"
          >
            ❓ Ajuda
          </Button>
        </div>

        <Button 
          variant="ghost" 
          color="default"
          @click="goBack"
          :isDisabled="navigationHistory.length <= 1"
          fullWidth
        >
          ← Voltar
        </Button>

        <div class="mt-4 p-3 bg-gray-50 rounded-md">
          <p class="text-sm font-medium">Histórico:</p>
          <p class="text-xs text-gray-600">{{ navigationHistory.join(' → ') }}</p>
        </div>
      </div>
    `,
  }),
};

export const ApiCall: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const users = ref<Array<{ id: number; name: string; email: string }>>([]);
      const isLoading = ref(false);
      const error = ref('');

      const fetchUsers = async () => {
        isLoading.value = true;
        error.value = '';
        
        try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          users.value = [
            { id: 1, name: 'João Silva', email: 'joao@email.com' },
            { id: 2, name: 'Maria Santos', email: 'maria@email.com' },
            { id: 3, name: 'Pedro Costa', email: 'pedro@email.com' },
          ];
        } catch (err) {
          error.value = 'Erro ao carregar usuários';
        } finally {
          isLoading.value = false;
        }
      };

      const clearUsers = () => {
        users.value = [];
        error.value = '';
      };

      return { users, isLoading, error, fetchUsers, clearUsers };
    },
    template: `
      <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-4">Carregar Dados da API</h3>
        
        <div class="flex gap-3 mb-4">
          <Button 
            color="primary"
            :isLoading="isLoading"
            @click="fetchUsers"
            class="flex-1"
          >
            {{ isLoading ? 'Carregando...' : 'Buscar Usuários' }}
          </Button>
          <Button 
            variant="bordered"
            color="danger"
            @click="clearUsers"
            :isDisabled="users.length === 0 && !error"
          >
            Limpar
          </Button>
        </div>

        <div v-if="error" class="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {{ error }}
        </div>

        <div v-if="users.length > 0" class="space-y-2">
          <h4 class="font-medium">Usuários encontrados:</h4>
          <div v-for="user in users" :key="user.id" class="p-3 bg-gray-50 rounded-md">
            <p class="font-medium">{{ user.name }}</p>
            <p class="text-sm text-gray-600">{{ user.email }}</p>
          </div>
        </div>

        <div v-else-if="!isLoading && !error" class="text-center text-gray-500 py-8">
          Clique em "Buscar Usuários" para carregar dados
        </div>
      </div>
    `,
  }),
};

export const ToggleState: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const isDarkMode = ref(false);
      const isNotificationsEnabled = ref(true);
      const selectedTheme = ref('blue');
      const themes = ['blue', 'green', 'purple', 'orange'];

      const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
      };

      const toggleNotifications = () => {
        isNotificationsEnabled.value = !isNotificationsEnabled.value;
      };

      const selectTheme = (theme: string) => {
        selectedTheme.value = theme;
      };

      return { 
        isDarkMode, 
        isNotificationsEnabled, 
        selectedTheme, 
        themes,
        toggleDarkMode, 
        toggleNotifications, 
        selectTheme 
      };
    },
    template: `
      <div class="max-w-lg mx-auto p-6 rounded-lg shadow-md transition-colors"
           :class="isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'">
        <h3 class="text-lg font-semibold mb-6">Configurações da Interface</h3>
        
        <div class="space-y-6">
          <!-- Dark Mode Toggle -->
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Modo Escuro</h4>
              <p class="text-sm opacity-70">Alterna entre tema claro e escuro</p>
            </div>
            <Button 
              :variant="isDarkMode ? 'solid' : 'bordered'"
              :color="isDarkMode ? 'warning' : 'default'"
              @click="toggleDarkMode"
            >
              {{ isDarkMode ? '🌙 Escuro' : '☀️ Claro' }}
            </Button>
          </div>

          <!-- Notifications Toggle -->
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Notificações</h4>
              <p class="text-sm opacity-70">Ativar/desativar notificações</p>
            </div>
            <Button 
              :variant="isNotificationsEnabled ? 'solid' : 'bordered'"
              :color="isNotificationsEnabled ? 'success' : 'danger'"
              @click="toggleNotifications"
            >
              {{ isNotificationsEnabled ? '🔔 Ativado' : '🔕 Desativado' }}
            </Button>
          </div>

          <!-- Theme Selection -->
          <div>
            <h4 class="font-medium mb-3">Tema de Cores</h4>
            <div class="grid grid-cols-2 gap-2">
              <Button 
                v-for="theme in themes"
                :key="theme"
                :variant="selectedTheme === theme ? 'solid' : 'bordered'"
                :color="theme === 'blue' ? 'primary' : theme === 'green' ? 'success' : theme === 'purple' ? 'secondary' : 'warning'"
                @click="selectTheme(theme)"
                size="sm"
              >
                {{ theme.charAt(0).toUpperCase() + theme.slice(1) }}
              </Button>
            </div>
          </div>

          <!-- Status Display -->
          <div class="p-4 rounded-md border-2 border-dashed"
               :class="isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'">
            <h4 class="font-medium mb-2">Status Atual:</h4>
            <ul class="text-sm space-y-1">
              <li>🎨 Tema: {{ selectedTheme }}</li>
              <li>🌓 Modo: {{ isDarkMode ? 'Escuro' : 'Claro' }}</li>
              <li>🔔 Notificações: {{ isNotificationsEnabled ? 'Ativadas' : 'Desativadas' }}</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  }),
};
