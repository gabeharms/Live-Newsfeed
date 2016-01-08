# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "CentOS-7-x86_64"
  config.vm.box_url = "http://cloud.centos.org/centos/7/vagrant/x86_64/images/CentOS-7-Vagrant-1505-x86_64-01.box"

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end

  require 'rbconfig'

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "vagrant/provisioning/mean.yml"
  end

  config.vm.network "forwarded_port", guest: 9000, host: 9000, auto_correct: true
end